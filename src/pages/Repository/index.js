import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, Issues, Select } from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repository: {},
      issues: [],
      loading: true,
      state: 'all',
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { state } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleSelectChange = e => {
    this.setState({ state: e.target.value });

    this.fetchIssues();
  };

  async fetchIssues() {
    const { match } = this.props;
    const { state } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        per_page: 5,
      },
    });

    this.setState({
      issues: response.data,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading> Carregando </Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos repositórios </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1> {repository.name} </h1>
          <p> {repository.description} </p>
        </Owner>

        <Issues>
          <Select onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </Select>

          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </Issues>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
