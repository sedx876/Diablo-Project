const Hire = require('../models/hire')
const formidable = require('formidable')
const fs = require('fs')
const _ = require('lodash')

exports.hireById = (req, res, next, id) => {
  Hire.findById(id)
    .populate('postedBy', '_id name') //who posted the character
    .populate('comments.postedBy', '_id name') //the comments of that character
    .populate('postedBy', '_id name role')
    .select('_id photo title hireKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes hireToken skill1 skill2 skill3 skill4 generalBuildNotes created likes comments')
    .exec((err, hire) => {
      if (err || !hire) {
        return res.status(400).json({
          error: err
        })
      }
      req.hire = hire
      next()
    })
}

// exports.getCharacters = (req, res) => {
//   const characters = Character.find()
//     .populate('postedBy', '_id name')
//     //.select white listing attrs make sure if they are required later
//     .select('_id title characterKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes kanaisCube activeSkills passiveSkills generalBuildNotes')
//     .then((characters) =>{
//       res.json({ characters})
//     })
//     .catch(err => console.table(err))
// }

exports.getHires = async (req, res) => {
  const currentPage = req.query.page || 1
  const perPage = 6
  let totalItems

  const hires = await Hire.find()
    .countDocuments()
    .then(count => {
      totalItems = count 
      return Hire.find()
        .skip((currentPage - 1) * perPage)
        .populate('comments', 'text created')
        .populate('postedBy', '_id name')
        .populate('comments.postedBy', '_id name')
        .limit(perPage)
        .sort({ created: -1 })
    })
    .then(hires => {
      res.status(200).json(hires)
    })
    .catch(err => console.table(err))
}

exports.createHire = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) =>{
    if (err) {
      return res.status(400).json({
        error: 'Image Could NOT Be Uploaded'
      })
    }
    let hire = new Hire(fields)
      req.profile.hashed_password = undefined
      req.profile.salt = undefined
      hire.postedBy = req.profile
    if (files.photo){
      hire.photo.data = fs.readFileSync(files.photo.path)
      hire.photo.contentType = files.photo.type
    }
    hire.save((err, result) => {
      if (err){
        return res.status(400).json({
          error: err
        })
      }
      res.json(result)
    })
  })
}

exports.hiresByUser = (req, res) => {
  Hire.find({ postedBy: req.profile._id })
    .populate('postedBy', '_id name')
    .select('_id photo title hireKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes hireToken skill1 skill2 skill3 skill4 generalBuildNotes created likes comments')
    .sort('_created')
    .exec((err, hires) =>{
      if (err){
        return res.status(400).json({
          error: err
        })
      }
      res.json(hires)
    })
}

exports.isPoster = (req, res, next) => {
  let sameUser = req.hire && req.auth && req.hire.postedBy._id == req.auth._id
  let adminUser = req.hire && req.auth && req.auth.role === 'admin'
    console.log("req.post ", req.hire, " req.auth ", req.auth)
    console.log("SAMEUSER: ", sameUser, " ADMINUSER: ", adminUser)
    let isPoster = sameUser || adminUser;
    if (!isPoster) {
      return res.status(403).json({
        error: 'User is not authorized'
      })
    }
    next()
}

exports.updateHire = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Photo could not be uploaded'
    })
  }
  let hire = req.hire
  hire = _.extend(hire, fields)
  hire.updated = Date.now()
  if (files.photo) {
    hire.photo.data = fs.readFileSync(files.photo.path)
    hire.photo.contentType = files.photo.type
  }
    hire.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
    }
      res.json(hire)
    })
  })
}

exports.deleteHire = (req, res) => {
  let hire = req.hire
  hire.remove((err, hire) => {
    if (err) {
      return res.status(400).json({
        error: err
    })
    }
			res.json({
        message: 'Hire deleted successfully'
    })
  })
}

exports.photo = (req, res, next) => {
  res.set('Content-Type', req.hire.photo.contentType)
  return res.send(req.hire.photo.data)
}

exports.singleHire = (req, res) => {
  return res.json(req.hire)
}

exports.like = (req, res) => {
  Hire.findByIdAndUpdate(req.body.hireId, 
		{ $push: { likes: req.body.userId } }, { new: true }).exec(
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
      } else {
          res.json(result)
      }
    }
  )
}

exports.unlike = (req, res) => {
  Hire.findByIdAndUpdate(req.body.hireId, { $pull: { likes: req.body.userId } }, 
		{ new: true }).exec(
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
        } else {
            res.json(result);
        }
      }
    )
}

exports.comment = (req, res) => {
  let comment = req.body.comment;
  comment.postedBy = req.body.userId;
  Hire.findByIdAndUpdate(req.body.hireId, { $push: { comments: comment } }, { new: true })
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
      } else {
          res.json(result)
      }
    })
}

exports.uncomment = (req, res) => {
  let comment = req.body.comment
  Hire.findByIdAndUpdate(req.body.hireId, 
		{ $pull: { comments: { _id: comment._id } } }, { new: true })
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
      } else {
          res.json(result);
      }
		})
}

exports.updateComment = (req, res) => {
	let comment = req.body.comment;
	Hire.findByIdAndUpdate(req.body.hireId, 
		{ $pull: { comments: { _id: comment._id } } }).exec((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
			})
			} else {
					Hire.findByIdAndUpdate(
						req.body.hireId,
						{ $push: { comments: comment, updated: new Date() } },
						{ new: true }
			)
				.populate('comments.postedBy', '_id name')
				.populate('postedBy', '_id name')
				.exec((err, result) => {
					if (err) {
						return res.status(400).json({
							error: err
					})
						} else {
								res.json(result)
						}
					})
			}
	})
}