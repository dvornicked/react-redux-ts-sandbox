import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from '../store/actions/user'

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(userActionCreators, dispatch)
}
