import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import UserSummary from '../models/UserSummary';

const router = Router();

router.post(
  '/',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('currentPassword').isLength({ min: 6 }).withMessage('Current password must be at least 6 characters'),
    body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
    body('profession').notEmpty().withMessage('Profession is required'),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('country').notEmpty().withMessage('Country is required'),
    body('state').notEmpty().withMessage('State is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('subscriptionPlan').isIn(['Basic', 'Pro', 'Enterprise']).withMessage('Invalid subscription plan'),
    body('newsletter').isBoolean().withMessage('Newsletter must be true or false'),
    body('companyName').custom((value, { req }) => {
      if (req.body.profession === 'Entrepreneur' && !value) {
        throw new Error('Company name is required for Entrepreneurs');
      }
      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const user = new UserSummary(req.body);
      await user.save();
      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

export default router;
