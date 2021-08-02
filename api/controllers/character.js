const Character = require('../models/character')
const formidable = require('formidable')
const fs = require('fs')
const _ = require('lodash')

exports.characterById = (req, res, next, id) => {
  Character.findById(id)
    .populate('postedBy', '_id name') //who posted the character
    .populate('comments.postedBy', '_id name') //the comments of that character
    .populate('postedBy', '_id name role')
    .select('_id photo title characterKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes kanaisCube activeSkills passiveSkills generalBuildNotes created likes comments')
    .exec((err, character) => {
      if (err || !character) {
        return res.status(400).json({
          error: err
        })
      }
      req.character = character
      next()
    })
}

exports.getCharacters = (req, res) => {
  const characters = Character.find()
    .populate('postedBy', '_id name')
    //.select white listing attrs make sure if they are required later
    .select('_id title characterKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes kanaisCube activeSkills passiveSkills generalBuildNotes')
    .then((characters) =>{
      res.json({ characters})
    })
    .catch(err => console.table(err))
}

// exports.getCharacters = async (req, res) => {
//   const currentPage = req.query.page || 1
//   const perPage = 6
//   let totalItems

//   const characters = await Character.find()
//     .countDocuments()
//     .then(count => {
//       totalItems = count 
//       return Character.find()
//         .skip((currentPage - 1) * perPage)
//         .populate('comments', 'text created')
//         .populate('postedBy', '_id name')
//         .populate('comments.postedBy', '_id name')
//         .limit(perPage)
//         .sort({ created: -1 })
//     })
//     .then(characters => {
//       res.status(200).json(characters)
//     })
//     .catch(err => console.table(err))
// }

exports.createCharacter = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) =>{
    if (err) {
      return res.status(400).json({
        error: 'Image Could NOT Be Uploaded'
      })
    }
    let character = new Character(fields)
      req.profile.hashed_password = undefined
      req.profile.salt = undefined
      character.postedBy = req.profile
    if (files.photo){
      character.photo.data = fs.readFileSync(files.photo.path)
      character.photo.contentType = files.photo.type
    }
    character.save((err, result) => {
      if (err){
        return res.status(400).json({
          error: err
        })
      }
      res.json(result)
    })
  })
}

exports.charactersByUser = (req, res) => {
  Character.find({ postedBy: req.profile._id })
    .populate('postedBy', '_id name')
    .select('_id photo title characterKlass helm shoulders gloves chestArmor belt pants boots bracers amulet ring1 ring2 weapon offhand gemNotes kanaisCube activeSkills passiveSkills generalBuildNotes created likes comments')
    .sort('_created')
    .exec((err, characters) =>{
      if (err){
        return res.status(400).json({
          error: err
        })
      }
      res.json(characters)
    })
}

exports.isPoster = (req, res, next) => {
  let sameUser = req.post && req.auth && req.post.postedBy._id == req.auth._id
  let adminUser = req.post && req.auth && req.auth.role === 'admin'
    console.log("req.post ", req.post, " req.auth ", req.auth)
    console.log("SAMEUSER: ", sameUser, " ADMINUSER: ", adminUser)
    let isPoster = sameUser || adminUser;
    if (!isPoster) {
      return res.status(403).json({
        error: 'User is not authorized'
      })
    }
    next()
}

exports.updateCharacter = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Photo could not be uploaded'
    })
  }
  let character = req.character
  character = _.extend(character, fields)
  character.updated = Date.now()
  if (files.photo) {
    post.photo.data = fs.readFileSync(files.photo.path)
    post.photo.contentType = files.photo.type
  }
    character.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
      })
    }
      res.json(character)
    })
  })
}

exports.deleteCharacter = (req, res) => {
  let character = req.character
  character.remove((err, character) => {
    if (err) {
      return res.status(400).json({
        error: err
    })
    }
			res.json({
        message: 'Character deleted successfully'
    })
  })
}

exports.photo = (req, res, next) => {
  res.set('Content-Type', req.character.photo.contentType)
  return res.send(req.character.photo.data)
}

exports.singleCharacter = (req, res) => {
  return res.json(req.character)
}

exports.like = (req, res) => {
  Character.findByIdAndUpdate(req.body.characterId, 
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
  Character.findByIdAndUpdate(req.body.characterId, { $pull: { likes: req.body.userId } }, 
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
  Character.findByIdAndUpdate(req.body.characterId, { $push: { comments: comment } }, { new: true })
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
  Character.findByIdAndUpdate(req.body.characterId, 
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
	Character.findByIdAndUpdate(req.body.characterId, 
		{ $pull: { comments: { _id: comment._id } } }).exec((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
			})
			} else {
					Character.findByIdAndUpdate(
						req.body.characterId,
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