const Notification = (props) => {
  const {
    notificationContainerStyling,
    notificationImgStyling,
    notificationImgUrl,
    notificationTextStyling,
    notificationTextContent,
  } = props;

  return (
    <div className={notificationContainerStyling}>
      <img className={notificationImgStyling} src={notificationImgUrl} />
      <p className={notificationTextStyling}>{notificationTextContent}</p>
    </div>
  );
};

const element = (
  <div className="notifications-bg-container">
    <h1 className="notifications-header">Notifications</h1>
    <div className="notification-collection-container">
      <Notification
        notificationContainerStyling="notification-item information-message"
        notificationImgStyling="notification-image"
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationTextStyling="notification-text"
        notificationTextContent="Information Message"
      />

      <Notification
        notificationContainerStyling="notification-item success-message"
        notificationImgStyling="notification-image"
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationTextStyling="notification-text"
        notificationTextContent="Success Message"
      />

      <Notification
        notificationContainerStyling="notification-item warning-message"
        notificationImgStyling="notification-image"
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationTextStyling="notification-text"
        notificationTextContent="Warning Message"
      />

      <Notification
        notificationContainerStyling="notification-item error-message"
        notificationImgStyling="notification-image"
        notificationImgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationTextStyling="notification-text"
        notificationTextContent="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
