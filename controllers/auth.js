import { User } from '../models/user.js'
import { Profile } from "../models/profile.js"
import jwt from 'jsonwebtoken'

export {
  signup,
  login
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function signup(req, res) {
  const profile = new Profile({ name: req.body.name})
  try {
    await profile.save()
    console.log(profile)
    const user = new User({name: req.body.name, email: req.body.email, password: req.body.password, profile: profile._id});
    try {
      await user.save();
      // Be sure to first delete data that should not be in the token
      const token = createJWT(user);
      res.json({ token })
    } catch (err) {
      console.log(err)
      res.status(400)
    }
  } catch (err) {
    console.log(err)
    res.status(400);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}