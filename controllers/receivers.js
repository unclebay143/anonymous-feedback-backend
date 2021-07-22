const { default: axios } = require("axios");

// Get all registered users from clerk
exports.getAllReceivers = async (req, res) => {
  const headersOption = {
    Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
  };

  try {
    // Retrieve registered users from clerk
    const { data } = await axios.get(`${process.env.CLERK_API}/v1/users`, {
      headers: headersOption,
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
};

// Get all registered users from clerk with filter
exports.findReceiver = async (req, res) => {
  const headersOption = {
    Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
  };

  try {
    // Retrieve registered users from clerk
    const { data: allReceivers } = await axios.get(
      `${process.env.CLERK_API}/v1/users`,
      {
        headers: headersOption,
      }
    );

    // Fetch out the requested receiver
    const findReceiver = allReceivers.filter(
      (receiver) => receiver.username === req.body.username
    );

    if (findReceiver.length === 0) {
      res.status(200).json({ message: "reciever not found" });
    }

    // Send the receiver username back - not all details
    res.status(200).send(findReceiver[0].username);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
};

// Get all registered users from clerk - with id (but no access to id from the feedback form 🤦‍♂️)
// exports.getSingleReceiver = async (req, res) => {
//   const headersOption = {
//     Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
//   };

//   try {
//     // Retrieve registered users from clerk
//     const { data } = await axios.get(
//       `${process.env.CLERK_API}/v1/users/${req.body.id}`,
//       {
//         headers: headersOption,
//       }
//     );

//     res.status(200).send(data.username);
//   } catch (error) {
//     res.status(400).json("something went wrong");
//   }
// };
