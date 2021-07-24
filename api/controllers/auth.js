const jwt = require('jsonwebtoken')
require('dotenv').config()
const expressJwt = require('express-jwt')
const User = require('../models/user')
const _ = require('lodash')
//const { OAuth2Client } = require('google-auth-library')
const { sendEmail } = require('../helpers')

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email})
  if(userExists)
  return res.status(403).json({
    error: 'User With That Email Already Exists!'
  })
  const user = await new User(req.body)
  await user.save()
  res.status(200).json({ message: 'SignUp Successful!! Please LogIn.'})
}

exports.signin = (req, res)=> {
	const { email, password } = req.body
	User.findOne({ email }, (err, user) => {
		if (err || !user){
			return res.status(401).json({
				error: 'User With That Email Does Not Exists. Please SingUp!'
			})
		}
		if(!user.authenticate(password)){
			return res.status(401).json({
				error: 'Email and Password Do Not Match'
			})
		}
		const token = jwt.sign({_id: user._id, role: user.role}, 
			process.env.JWT_SECRET)
			res.cookie('t', token, { expire: new Date() + 9999})
			const { _id, name, email, role } = user 
			return res.json({ token, user: { _id, email, name, role }})
	})
}

exports.signout = (req, res) => {
	res.clearCookie('t')
	return res.json({ message: 'SignOut Successful!'})
}

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256'],
	userProperty: 'auth'
})

exports.forgotPassword = (req, res) => {
	if(!req.body)
		return res.status(400).json({ message: 'No Request Body'})
	if(!req.body.email)
		return res.status(400).json({
			message: 'No Email In Request Body'
		})
		const { email } = req.body
		User.findOne({ email }, (err, user) => {
			if (err || !user)
			return res.status('401').json({
				error: 'User With That Email Does Not Exist!'
			})
			const token = jwt.sign({ _id: user._id, iss: process.env.APP_NAME},
				process.env.JWT_SECRET)
				const emailData = {
					from: 'noreply@node-react.com',
					to: email,
					subject: 'Password Reset Instructions',
					text: `Please use the following link to reset your password: ${
						process.env.CLIENT_URL
						}/reset-password/${token}`,
					html: `<p>Please use the following link to reset your password:</p> <p>${
						process.env.CLIENT_URL
						}/reset-password/${token}</p>`
					}
			return user.updateOne({ resetPasswordLink: token }, (err, success) => {
				if (err){
					return res.json({ message: err })
				}else{
					sendEmail(emailData)
					return res.status(200).json({
						message: `Email Has Been Sent To ${email}.
							Follow The Instructions To Reset Your Password.`
					})
				}
			})
		})
}

exports.resetPassword = (req, res) => {
	const { resetPasswordLink, newPassword } = req.body
	User.findOne({ resetPasswordLink }, (err, user) => {
		if (err || !user)
			return res.status('401').json({
				error: 'Invalid Link!'
		})
		const updatedFields = {
			password: newPassword,
			resetPasswordLink: ''
		}
		user = _.extend(user, updatedFields)
		user.updated = Date.now();
		user.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
			})
		}
		res.json({
			message: `Great! Now you can login with your new password.`
		})
	})
	})
}

exports.socialLogin = async (req, res) => {
	const idToken = req.body.tokenId;
	const ticket = await client.verifyIdToken({ 
		idToken, audience: process.env.REACT_APP_GOOGLE_CLIENT_ID 
	})
	const { email_verified, email, name, picture, sub: googleid } = ticket.getPayload()
	if (email_verified) {
		const newUser = { email, name, password: googleid }
		let user = User.findOne({ email }, (err, user) => {
			if (err || !user) {
				user = new User(newUser)
				req.profile = user
				user.save()
				const token = jwt.sign({ _id: user._id, iss: process.env.APP_NAME }, process.env.JWT_SECRET)
				res.cookie('t', token, { expire: new Date() + 9999 })
				const { _id, name, email } = user
				return res.json({ token, user: { _id, name, email } })
			} else {
						req.profile = user;
						user = _.extend(user, newUser);
						user.updated = Date.now();
						user.save();
						const token = jwt.sign({ _id: user._id, iss: process.env.APP_NAME }, 
							process.env.JWT_SECRET
						)
						res.cookie('t', token, { expire: new Date() + 9999 })
						const { _id, name, email } = user
						return res.json({ token, user: { _id, name, email } })
					}
			})
	}
}