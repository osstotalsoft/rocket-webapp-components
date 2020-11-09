import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() })