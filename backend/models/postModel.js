import { Schema, model } from 'mongoose';

const postSchema = new Schema({

   title: {
      type: String,
      required: true,
   },
   bannerImage: {
      type: String,
      // required: true,
   },
   description: {
      type: String,
      maxlength: 200,
      // required: true
   },
   content: {
      type: [],
      // required: true
   },
   tags: {
      type: [String],
      // required: true
   },
   author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
   },
   activity: {
      total_likes: {
         type: Number,
         default: 0
      },
      total_comments: {
         type: Number,
         default: 0
      },
      total_reads: {
         type: Number,
         default: 0
      },
      total_parent_comments: {
         type: Number,
         default: 0
      },
   },
   comments: {
      type: [Schema.Types.ObjectId],
      ref: 'comments'
   },
   draft: {
      type: Boolean,
      default: false
   }
},
   {
      timestamps: {
         createdAt: 'publishedAt'
      }
   });

const Post = new model('Post', postSchema);
export default Post;