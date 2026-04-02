import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import moment from 'moment';

/****************************** schema ******************************/
const userSchema = new Schema({
      fullname: {
         type: String,
         trim: true,
         required: true
      },
      email: {
         type: String,
         trim: true,
         required: [true, 'Email is required!'],
         unique: [true, 'Email already exists!'],
         validate: [validator?.isEmail, 'Enter a valid email address!']
      },
      password: {
         type: String,
         trim: true,
         required: [true, 'Password is required!'],
         minLength: [8, 'Password must be at least eight (8) characters!'],
         select: false
      },
      personal_info: {
         bio: {
            type: String,
            maxlength: [200, 'Biography should not be more than 200 characters!'],
            default: ''
         },
         profile_image: {
            public_id: {
               type: String,
               required: true,
               default: () => crypto.randomUUID() // Generate UUID by default
            },
            url: {
               type: String,
               required: true,
               default: 'https://res.cloudinary.com/mdbdrrhm/image/upload/v1774959178/l1raeqzzgcnheamte1eh.png' // image by default
            }
         },
         account_info: {
            total_posts: {
               type: Number,
               default: 0
            },
            total_reads: {
               type: Number,
               default: 0
            }
         },
         social_links: {
            codepen: {
               type: String,
               default: ''
            },
            facebook: {
               type: String,
               default: ''
            },
            github: {
               type: String,
               default: ''
            },
            instagram: {
               type: String,
               default: ''
            },
            twitter: {
               type: String,
               default: ''
            },
            website: {
               type: String,
               default: ''
            }
         },
         posts: {
            type: [Schema.Types.ObjectId],
            ref: 'posts',
            default: []
         }
      },
      role: {
         type: String,
         enum: ['user', 'admin'],
         required: true,
         default: 'user'
      },
      lastLoginTime: {
         type: Date,
         default: ''
      },
      isLoggedIn: {
         type: Boolean,
         default: false
      },
      isVerified: {
         type: Boolean,
         required: true,
         default: false
      },
      resetPasswordToken: String,
      resetPasswordExpiresAt: Date,
      verificationToken: String,
      verificationTokenExpiresAt: Date

   },
   {
      timestamps: {
         createdAt: 'joinedAt'
      }
   }
);

/************** hash password before saving user ****************/
userSchema.pre('save', async function () {
   if (!this.isModified('password')) {
      return;
   }
   this.password = await bcrypt.hash(this.password, 10);
});

/******************** format lastLoginTime **********************/
userSchema.methods.updateLastLoginTime = async function () {
   this.lastLoginTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
   return this.save();
};

/********************* toggle isLoggedIn ***********************/
userSchema.methods.toggleIsLoggedIn = function () {
   this.isLoggedIn = !this.isLoggedIn;
   return this.save();
};

/********************* compare password ***********************/
userSchema.methods.comparePassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
};

/****************** generate JsonWebToken ********************/
userSchema.methods.generateJsonWebToken = function () {
   return jwt.sign(
      {id: this._id, role: this.role, isLoggedIn: this.isLoggedIn},
      process.env.JWT_SECRET,
      {
         expiresIn: process.env.JWT_EXPIRES_TIME
      }
   );
};

/****************** generate resetPasswordToken ********************/
userSchema.methods.generateResetPasswordToken = function () {

   /**************** generate the token ****************/
   const resetToken = crypto.randomBytes(20).toString('hex');

   /**************** hash and set to resetPasswordToken ****************/
   this.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

   /**************** set token to expire ****************/
   this.resetPasswordExpiresAt = Date.now() + 30 * 60 * 1000; //30 minutes

   return resetToken;
};

/****************** generate verificationToken ********************/
userSchema.methods.generateVerificationToken = function () {
   this.verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
   this.verificationTokenExpiresAt = Date.now() + 60 * 60 * 1000 * 24; // 24 hours

   return this.verificationToken;
};

const User = new model('User', userSchema);
export default User;