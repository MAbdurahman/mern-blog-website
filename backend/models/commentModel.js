import { Schema, model } from 'mongoose';

const commentSchema = new Schema({

      post_id: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'posts'
      },
      post_author: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'posts',
      },
      comment: {
         type: String,
         required: true
      },
      children: {
         type: [Schema.Types.ObjectId],
         ref: 'comments'
      },
      commented_by: {
         type: Schema.Types.ObjectId,
         require: true,
         ref: 'users'
      },
      isReply: {
         type: Boolean,
         default: false,
      },
      parent: {
         type: Schema.Types.ObjectId,
         ref: 'comments'
      }

   },
   {
      timestamps: {
         createdAt: 'commentedAt'
      }
   });

const Comment = model('comments', commentSchema);
export default Comment;