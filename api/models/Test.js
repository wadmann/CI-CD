/**
 * Test.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    qsts : { collection: 'question', via: 'test_id'},
    difficulty : { type: 'string' , required: true},
    time : { type: 'int' , required: true },
    techstack : { type: 'array' },
    assessment_id : { model: 'assessment'}

  }
};

