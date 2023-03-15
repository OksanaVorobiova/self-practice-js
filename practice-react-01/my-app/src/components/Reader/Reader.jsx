import { Component } from "react";

export default class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem("index", JSON.stringify(this.state.index));
    }
  }

  changeIndex = (value) => {
    this.setState((state) => ({
      index: (state.index += value),
    }));
  };

  render() {
    const activeItem = this.props.items[this.state.index];
    const total = this.props.items.length;
    const activeIndex = this.state.index;

    return (
      <div>
        <section>
          <button
            type="button"
            disabled={activeIndex <= 0}
            onClick={() => this.changeIndex(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={activeIndex + 1 === total}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {activeIndex + 1}/{total}
        </p>

        <article>
          <h2>{activeItem.title}</h2>
          <p>{activeItem.text}</p>
        </article>
      </div>
    );
  }
}
