import express from 'express';
import User, { UserDocument } from '../models/user.model';

const router = express.Router();

// GET /users
// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /users/:id
// Get a single user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /users
// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, avatar, isVerified, isAdmin } = req.body;
    const newUser: UserDocument = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      avatar,
      isVerified,
      isAdmin,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /users/:id
// Update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, avatar, isVerified, isAdmin } = req.body;
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = username;
      user.email = email;
      user.password = password;
      user.firstName = firstName;
      user.lastName = lastName;
      user.avatar = avatar;
      user.isVerified = isVerified;
      user.isAdmin = isAdmin;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /users/:id
// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
