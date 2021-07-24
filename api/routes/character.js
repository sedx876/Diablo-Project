const express = require('express')
const {
  getCharacters,
  createCharacter,
  charactersByUser,
  characterById,
  isPoster,
  updateCharacter,
  deleteCharacter,
  photo,
  singleCharacter,
  like,
  unlike,
  comment,
  uncomment,
  updateComment
} = require('../controllers/character')
const { requireSignin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { createCharacterValidator } = require('../validator')

const router = express.Router()

router
  .get('/characters', getCharacters)

//Likes
router
  .put('/character/like', requireSignin, like)

router
  .put('character/unlike', requireSignin, unlike)

//Comments
  router
    .put('/character/comment', requireSignin, comment)

  router
    .put('/character/uncomment', requireSignin, uncomment)

  router
    .put('/character/updatecomment', requireSignin, updateComment)

//Character Routes
router
  .post('/character/new/:userId', requireSignin, createCharacter, createCharacterValidator)

router
  .get('/characters/by/:userId', requireSignin, charactersByUser)

router
  .get('/character/:characterId', singleCharacter)

router
  .put('/character/:characterId', requireSignin, isPoster, updateCharacter)

router
  .delete('/character/:characterId', requireSignin, isPoster, deleteCharacter)

router
  .get('/character/photo/:characterId', photo)

// any route containing :userId, our app will first execute userById()
router
  .param('userId', userById)
// any route containing :postId, our app will first execute postById()
router
  .param('characterId', characterById)

module.exports = router