import * as user from '../user'

jest.setTimeout(2000000000)
describe('user handler', () => {
    it('should should create a new user', async  () => {
        const req = { body: { username: 'username', password: 'le password'}}
        const res = {json({token}){
            expect(token).toBeTruthy()
        }}


        await user.createNewUser(req, res, () => {})
    })
})