import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>
            Hello from {this.props.compiler} and {this.props.framework}!
            it's a try for ts and react!
        </h1>;
    }
}

export class A extends React.Component {
    render() {
        return <Hello compiler="component A" framework="React" />
    }
}
export class B extends React.Component {
    render() {
        return <Hello compiler="component B" framework="React" />
    }
}
export class C extends React.Component {
    render() {
        return <Hello compiler="component C" framework="React" />
    }
}