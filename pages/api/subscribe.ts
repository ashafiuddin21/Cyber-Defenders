export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body
  
      // TODO: Hook up to email provider like Mailchimp or store in DB
      console.log('New email signup:', email)
  
      return res.status(200).json({ message: 'Success' })
    }
    return res.status(405).end()
  }
  