import type Mithril from "mithril";
import Component from 'flarum/common/Component';
import LoginView from "./LoginView";

export default class PrivateFacade<T> extends Component {
  view() {


    return (
      <div className="PrivateFacade">
        <div className="PrivateFacade-container container">
          <LoginView />
        </div>
      </div>
    );
  }
}
