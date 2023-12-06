import userModel from "../../../../DB/Modeles/User.models.js";

export const Profile = async (req, res) => {
    try {
        const imageUrl = req.file.destination + '/' + req.file.filename;
        const user = await userModel.findByIdAndUpdate(req.user._id, { profilepic: imageUrl }, { new: true });
        return res.json({ message: user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.stack });
    }
}

export const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
  
    try {
      const user = await userModel.findById(req.user._id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Current password is incorrect" });
      }
  
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedNewPassword;
  
      await user.save();
  
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error: error.stack });
    }
  };
  