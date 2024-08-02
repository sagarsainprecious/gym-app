export async function adminSignIn(req, res) {
    const { email, password } = req.body;
    
    try {
      const result = await signInAdmin(emailOrPhone, password);
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(401).json(result);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
  