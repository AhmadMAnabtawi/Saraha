export const signup = async (req, res) => {
    try {
      // Implement your signup logic here
      res.json({ message: 'Signup success' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.stack });
    }
  };
  
  export const signin = async (req, res) => {
    try {
      // Implement your signin logic here
      res.json({ message: 'Signin success' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.stack });
    }
  };
  