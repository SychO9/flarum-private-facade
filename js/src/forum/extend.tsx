import Extend from 'flarum/common/extenders';
import PrivateFacade from './components/PrivateFacade';

export default [
  new Extend.Routes() //
    .add('sycho-private-facade.login', '/login', PrivateFacade)
    .add('sycho-private-facade.signup', '/signup', PrivateFacade),
];
