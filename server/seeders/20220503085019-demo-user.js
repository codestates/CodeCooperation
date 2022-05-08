'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('user', [{
        email: "siu@naver.com",
        nickname: "코딩짱",
        password: "123123",
        created_at: new Date(),
        updated_at: new Date(),
      }]);

      const users = await queryInterface.sequelize.query(`SELECT id FROM user;`);
      const user_row = users[0];

      await queryInterface.bulkInsert('post', [
        {
          title: "js 프로젝트 모집합니다",
          start_date: "2022.05.03",
          end_date: "2022.05.10",
          stack: "js,react,node,sequelize",
          content: "자바스크립트를 기반으로 간단한 웹 개발 프로젝트 하실분을 모집합니다.",
          total_member: 5,
          current_member: 1,
          project_status: "모집중",
          user_id: user_row[0].id
        },
      ]);

      const post = await queryInterface.sequelize.query(`SELECT id FROM post;`);
      const post_row = post[0];
      
      await queryInterface.bulkInsert('applicant', [
        {
          comment: "백엔드 node개발자입니다. 잘부탁드립니다",
          user_id: user_row[0].id,
          post_id: post_row[0].id
        }
      ])

      await queryInterface.bulkInsert('bookmark', [
        {
          user_id: user_row[0].id,
          post_id: post_row[0].id
        }
      ])

      await queryInterface.bulkInsert('team', [
        {
          user_id: user_row[0].id,
          post_id: post_row[0].id
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('applicant', null, {});
    await queryInterface.bulkDelete('bookmark', null, {});
    await queryInterface.bulkDelete('team', null, {});
    await queryInterface.bulkDelete('post', null, {});
    await queryInterface.bulkDelete('user', null, {});
  }
};
