"use client";

// Minimal host for the page "logic" classes ported from the Claude Design prototypes.
//
// Each page is a logic class (state, lifecycle hooks, `renderVals()`) plus a template
// function that renders JSX from the values `renderVals()` returns. This mirrors the
// prototype runtime's semantics so the ported behaviour runs unchanged:
//   - `setState` applies the patch synchronously to `this.state`, then re-renders;
//   - the template sees `{ ...props, ...renderVals() }`.
import React from "react";
import { submitCompletedForms } from "./forms";

// Page state and render values are untyped: they come from the ported prototype logic.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyState = Record<string, any>;
type Update = AnyState | ((prev: AnyState) => AnyState | null);

export class DCLogic {
  props: AnyState;
  state: AnyState = {};
  /** Set by the host component after construction. */
  __host: { rerender: (cb?: () => void) => void } | null = null;

  constructor(props: AnyState) {
    this.props = props || {};
  }
  setState(update: Update, cb?: () => void) {
    const prev = this.state;
    const patch = typeof update === "function" ? update(prev) : update;
    this.state = { ...prev, ...(patch || {}) };
    submitCompletedForms(prev, this.state);
    if (this.__host) this.__host.rerender(cb);
  }
  forceUpdate() {
    if (this.__host) this.__host.rerender();
  }
  componentDidMount() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps: AnyState, prevState: AnyState) {}
  componentWillUnmount() {}
  renderVals(): AnyState {
    return {};
  }
}

type LogicClass = new (props: AnyState) => DCLogic;
type Template = (v: AnyState) => React.ReactNode;

export function createDCPage(Logic: LogicClass, template: Template, defaults: AnyState = {}) {
  class DCPage extends React.Component<AnyState, { n: number }> {
    logic: DCLogic;
    prevLogicState: AnyState;
    state = { n: 0 };

    constructor(props: AnyState) {
      super(props);
      this.logic = new Logic({ ...defaults, ...props });
      this.prevLogicState = this.logic.state;
      this.logic.__host = this.host;
    }
    host = {
      rerender: (cb?: () => void) => this.setState((s) => ({ n: s.n + 1 }), cb),
    };
    componentDidMount() {
      this.logic.__host = this.host;
      this.prevLogicState = this.logic.state;
      this.logic.componentDidMount();
    }
    componentDidUpdate(prevProps: AnyState) {
      const prevState = this.prevLogicState;
      this.prevLogicState = this.logic.state;
      this.logic.props = { ...defaults, ...this.props };
      this.logic.componentDidUpdate({ ...defaults, ...prevProps }, prevState);
    }
    componentWillUnmount() {
      this.logic.componentWillUnmount();
      this.logic.__host = null;
    }
    render() {
      const props = { ...defaults, ...this.props };
      this.logic.props = props;
      return <div className="dc-root">{template({ ...props, ...this.logic.renderVals() })}</div>;
    }
  }
  return DCPage;
}
