const myUsername = 'sohbetguly'
const myPassword = 'sohbet'

// const logKey = {
//   admin: {
//     token: 'admin-token'
//   }
// }

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const { password } = config.body
      // const token = tokens[username]
      if (myPassword !== password || myUsername !== username) {
        return {
          code: 60204,
          message: 'Ulanyjy adňyz ýa-da açar sözüňiz nädogry.'
        }
      }
      // mock error
      // if (!token) {
      //   return {
      //     code: 60204,
      //     message: 'Ulanyjy adňyz nädogry.'
      //   }
      // }

      return {
        code: 20000,
        data: tokens['admin']
        // data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
