import Component from '../../core/Component';
import { setData, getData } from '../../utils/storageUtil';
import { loginUser } from '../../auth/login';
import { getUserData, editUser, deleteUser } from '../../auth/edit';
import { isPasswordDifferent } from '../../auth/validate';
import { showSnackBar } from '../../utils/domUtil';

class UserEditPage extends Component {
  setup() {
    const { email, name } = getData('user') ? getData('user').user : '';
    this.state = { userId: this.props.userid, email, name };
  }

  template() {
    const { isloggedin } = this.props;
    const login = JSON.parse(isloggedin);

    if (!login) {
      return `<p>로그인 후 회원 정보 수정을 해주세요</p>`;
    }

    return `
      <header>
        <h1 class="title">회원정보 수정</h1>
      </header>
      <section>
        <h2 hidden>회원 정보 수정 폼</h2>
        <form id="user-edit-form" class="user-edit-form">
          <label for="email">이메일</label>
          <input type="email" class="edit-input styled-input" placeholder="이메일 주소를 입력해주세요" name="email" value=${this.state.email} required>
          <label for="user-name">이름</label>
          <input type="text" class="edit-input styled-input" placeholder="이름을 입력해주세요" name="userName" minlength="2" maxlength="6" value=${this.state.name} required>
          <label for="password">비밀번호</label>
          <input type="password" class="edit-input styled-input" placeholder="비밀번호를 입력해주세요" name="password" pattern="^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*+=-]|[A-Z]).{8,}" required>
          <label for="password-check">비밀번호 확인</label>
          <input type="password" class="edit-input styled-input" placeholder="비밀번호를 입력해주세요" name="passwordCheck" required>
          <button type="submit" class="edit-button styled-button emphasized">확인</button>
        </form>
        <button id="withdraw-button" class="withdraw">탈퇴하기</button>
      </section>
      <div class="snackbar"></div>
    `;
  }

  setEvent() {
    this.addEvent('submit', '#user-edit-form', async (event) => {
      event.preventDefault();

      const snackbar = this.querySelector('.snackbar');
      const { email, userName, password, passwordCheck } =
        event.target.elements;

      if (isPasswordDifferent(password.value, passwordCheck.value)) {
        showSnackBar(snackbar, '비밀번호를 확인해주세요');

        return;
      }

      const userInfo = {
        email: email.value,
        name: userName.value,
        password: password.value,
      };

      // 이미 존재하는 이메일로 수정 -> error
      // 지금 이메일이랑 동일 -> Ok
      if (this.state.email !== userInfo.email) {
        const userDataList = await getUserData();

        if (
          userDataList.find((userData) => userData.email === userInfo.email)
        ) {
          showSnackBar('이미 존재하는 이메일입니다.');

          return;
        }
      }

      // 회원 정보 수정
      await editUser(userInfo);

      // 수정된 회원 정보로 다시 로그인
      const loginResponse = await loginUser({
        email: email.value,
        password: password.value,
      });

      if (!loginResponse.accessToken) {
        showSnackBar(snackbar, loginResponse);

        return;
      }

      setData('user', loginResponse);

      window.location.href = 'http://localhost:9000/';
    });

    this.addEvent('click', '#withdraw-button', async (event) => {
      event.preventDefault();

      await deleteUser();

      localStorage.removeItem('user');
      window.location.href = 'http://localhost:9000/';
    });
  }
}

customElements.define('user-edit', UserEditPage);
