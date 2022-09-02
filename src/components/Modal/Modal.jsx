import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }
  onCloseModal = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
