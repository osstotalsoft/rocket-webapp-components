import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'regenerator-runtime/runtime'

configure({ adapter: new Adapter() })