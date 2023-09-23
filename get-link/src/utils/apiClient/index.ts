const apiUrl: any = process.env.BASE_URL

export const getCategory = async () => {
  try {
    const response = await fetch(
      `https://backend.getlinked.ai/hackathon/categories-list`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

export async function registrationData({ body }: { body: object }) {
  try {
    const url = `https://backend.getlinked.ai/hackathon/registration`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function contactForm({ body }: { body: object }) {
  try {
    const url = `https://backend.getlinked.ai/hackathon/registration`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
