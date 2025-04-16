export async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/pauloariell')
  const responseJson = await response.json()
  return <pre>{JSON.stringify(responseJson, null, 2)}</pre>
}
