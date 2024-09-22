import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Courses',
    required: true,
  },
  lessonLanguage: {
    type: String,
    required: true,
  },
  lessonName: {
    type: String,
    required: true,
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapters',
    }
  ]
});

const Lesson = mongoose.model('Lessons', LessonSchema);
export default Lesson;
