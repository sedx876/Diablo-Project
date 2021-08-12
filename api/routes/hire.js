const express = require('express')
const {
  getHires,
  createHire,
  hiresByUser,
  hireById,
  isPoster,
  updateHire,
  deleteHire,
  photo,
  singleHire,
  like,
  unlike,
  comment,
  uncomment,
  updateComment
} = require('../controllers/hire')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createHireValidator } = require('../validator')

const router = express.Router()

router
  .get('/hires', getHires)

//Likes
router
  .put('/hire/like', requireSignin, like)

router
  .put('hire/unlike', requireSignin, unlike)

//Comments
  router
    .put('/hire/comment', requireSignin, comment)

  router
    .put('/hire/uncomment', requireSignin, uncomment)

  router
    .put('/hire/updatecomment', requireSignin, updateComment)

//Character Routes
router
  .post('/hire/new/:userId', requireSignin, createHire, createHireValidator)

router
  .get('/hires/by/:userId', requireSignin, hiresByUser)

router
  .get('/hire/:hireId', singleHire)

router
  .put('/hire/:hireId', requireSignin, isPoster, updateHire)

router
  .delete('/hire/:hireId', requireSignin, isPoster, deleteHire)

router
  .get('/hire/photo/:hireId', photo)

// any route containing :userId, our app will first execute userById()
router
  .param('userId', userById)
// any route containing :postId, our app will first execute postById()
router
  .param('hireId', hireById)

module.exports = router