import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';

import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';

import Signup from '../src/pages/Signup';
import Mypage from '../src/pages/Mypage';
import Login from '../src/pages/Login';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(
  '<!doctype html><html><body><p>paragraph</p></body></html>'
);

global.window = dom.window;
global.document = dom.window.document;

Enzyme.configure({ adapter: new Adapter() });

describe('Section 3 Hiring Assessments - Client', () => {
  const mockedUser = {
    email: 'coding.kim@codestates.com',
    username: '김코딩',
    mobile: '010-1523-2342'
  };

  describe('\nℹ️  Signup 페이지\n================\n', () => {
    it('🧩 회원가입 버튼을 눌렀을 시 성공적으로 회원가입이 되어야합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      );

      const uniqueEmail = new Date().toISOString() + '@test.com';

      const scope = nock('https://localhost:4000')
        .post('/signup')
        .reply(201, { message: 'ok' });

      const target = wrapper.children().childAt(0).childAt(0);
      const emailInput = target.find({ type: 'email' });
      const pwInput = target.find({ type: 'password' });
      const nameInput = target.find({ type: 'text' });
      const telInput = target.find({ type: 'tel' });

      emailInput.simulate('change', { target: { value: uniqueEmail } });
      pwInput.simulate('change', { target: { value: '1234' } });
      nameInput.simulate('change', { target: { value: 'test' } });
      telInput.simulate('change', { target: { value: '010-1234-5678' } });

      target.find('.btn-signup').simulate('click');

      setTimeout(() => {
        const ajaxCallCount = scope.interceptors[0].interceptionCounter;
        expect(ajaxCallCount).to.eql(1); // ajax call이 1회 발생
        expect(scope.interceptors[0].statusCode).to.eql(201);
        expect(scope.interceptors[0].body).to.eql(
          JSON.stringify({ message: 'ok' })
        );
        scope.done();
        done();
      });
    });

    it('🧩 유저 정보가 충분하지 않은 상태에서 회원가입 버튼을 누를 시 에러메시지가 나타나야 합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      );

      wrapper.find('.btn-signup').simulate('click');

      setTimeout(() => {
        expect(wrapper.find('.alert-box').text()).to.eql(
          '모든 항목은 필수입니다'
        );
        done();
      });
    });

    it('🧩 유저 정보가 충분하지 않은 상태라면 POST 요청이 전송되지 않아야 합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      );

      const scope = nock('https://localhost:4000').post('/signup').reply(201);

      wrapper.find('.btn-signup').simulate('click');

      setTimeout(() => {
        const ajaxCallCount = scope.interceptors[0].interceptionCounter;
        expect(ajaxCallCount).to.eql(0); // ajax call이 발생하지 않음

        nock.abortPendingRequests();
        done();
      });
    });
  });

  describe('\nℹ️  Login 테스트\n===============\n', () => {
    it('🧩 로그인 버튼 클릭 시 성공적으로 로그인되어야 합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const scope = nock('https://localhost:4000').post('/signin').reply();

      const target = wrapper.children().childAt(0).childAt(0);
      const emailInput = target.find({ type: 'email' });
      const pwInput = target.find({ type: 'password' });
      const loginBtn = target.find('.btn-login');

      emailInput.simulate('change', { target: { value: 'test@test.net' } });
      pwInput.simulate('change', { target: { value: '1234' } });
      loginBtn.simulate('click');

      setTimeout(() => {
        const ajaxCallCount = scope.interceptors[0].interceptionCounter;
        expect(ajaxCallCount).to.eql(1);

        scope.done();
        done();
      });
    });

    it('🧩 email 또는 password가 채워지지 않았다면 로그인 버튼 클릭 시 에러메시지가 나타나야 합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      wrapper.find('.btn-login').simulate('click');

      setTimeout(() => {
        expect(wrapper.find('.alert-box').text()).to.eql(
          '이메일과 비밀번호를 입력하세요'
        );
        done();
      });
    });

    it('🧩 email 또는 password가 채워지지 않았다면 로그인 버튼 클릭 시 POST 요청이 일어나지 않아야합니다.', (done) => {
      const wrapper = mount(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const scope = nock('https://localhost:4000').post('/signin').reply(201);

      wrapper.find('.btn-login').simulate('click');

      setTimeout(() => {
        const ajaxCallCount = scope.interceptors[0].interceptionCounter;
        expect(ajaxCallCount).to.eql(0); // ajax call이 발생하지 않음

        nock.abortPendingRequests();
        done();
      });
    });

    it('🧩 로그인 후 handleResponseSuccess 함수가 호출되어야 합니다.', (done) => {
      const callback = sinon.spy(() => {});
      const wrapper = mount(
        <MemoryRouter>
          <Login handleResponseSuccess={callback} />
        </MemoryRouter>
      );

      nock('https://localhost:4000').post('/signin').reply();

      const target = wrapper.children().childAt(0).childAt(0);
      const emailInput = target.find({ type: 'email' });
      const pwInput = target.find({ type: 'password' });
      const loginBtn = target.find('.btn-login');

      emailInput.simulate('change', { target: { value: 'test@test.net' } });
      pwInput.simulate('change', { target: { value: '1234' } });
      loginBtn.simulate('click');

      setTimeout(() => {
        expect(callback.callCount).to.eql(1);
        done();
      }, 200);
    });
  });

  describe('\nℹ️  Mypage 테스트\n================\n', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    it('🧩 userinfo가 있다면 유저의 정보가 렌더되어야 합니다.', () => {
      const wrapper = mount(<Mypage userinfo={mockedUser} />, {
        attachTo: container
      });

      expect(wrapper.find('h1').text()).to.eql('Mypage');
      expect(wrapper.find('.username').text()).to.eql('김코딩');
      expect(wrapper.find('.email').text()).to.eql('coding.kim@codestates.com');
      expect(wrapper.find('.mobile').text()).to.eql('010-1523-2342');
    });

    it('🧩 userinfo가 없다면 아무 정보도 렌더되지 않아야합니다.', () => {
      const wrapper = mount(<Mypage />, {
        attachTo: container
      });

      expect(wrapper.text()).to.eql('');
    });

    it('🧩 로그아웃 버튼에 핸들러가 props로 존재하도록 렌더되어야 합니다.', () => {
      const handler = () => {};
      const wrapper = mount(
        <Mypage userinfo={mockedUser} handleLogout={handler} />,
        {
          attachTo: container
        }
      );
      expect(wrapper.find('button.btn-logout').prop('onClick')).to.eql(handler);
    });
  });
});
