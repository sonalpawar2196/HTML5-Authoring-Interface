const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["author", "admin"], required: true },
  passwordHash: { type: String, required: true },
  organizationID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true }
});

// Hash password before saving to the database
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const hash = await bcrypt.hash(user.passwordHash, 10);
    user.passwordHash = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords during login
UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
