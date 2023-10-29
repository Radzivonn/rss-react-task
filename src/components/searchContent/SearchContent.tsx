import React, { Component } from 'react';
import './style.scss';
import { Card } from '../card/Card';

export class SearchContent extends Component {
  render(): React.ReactNode {
    return (
      <section className="search-content">
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
        <Card name="card name" description="card description" />
      </section>
    );
  }
}
