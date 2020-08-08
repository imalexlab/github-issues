import { API_URL, ISSUES_PER_PAGE } from 'src/utils/constants';

interface Params {
  owner: string;
  repo: string;
  page?: number;
  perPage?: number;
}

export default async function getIssues({
  owner,
  repo,
  page = 1,
  perPage = ISSUES_PER_PAGE,
}: Params) {
  const response = await fetch(
    `${API_URL}/repos/${owner}/${repo}/issues?page=${page}&per_page=${perPage}`
  );
  return response.json();
}
