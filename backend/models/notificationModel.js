import {Schema, model} from 'mongoose';

const notificationSchema = new Schema({
      type: {
         type: String,
         enum: ['like', 'comment', 'reply'],
         required: true
      },
      post: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'posts'
      },
      notification_for: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'users'
      },
      user: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'users'
      },
      comment: {
         type: Schema.Types.ObjectId,
         ref: 'comments'
      },
      reply: {
         type: Schema.Types.ObjectId,
         ref: 'comments'
      },
      replied_on_comment: {
         type: Schema.Types.ObjectId,
         ref: 'comments'
      },
      seen: {
         type: Boolean,
         default: false
      }
   },

   {
      timestamps: true


   });

const Notification = model('notifications', notificationSchema);
export default Notification;