import axios from "axios"

export const getIpAddress = async () => {
  try {
    const {
      data,
    }: {
      data: {
        country_code: string
        country_name: string
        city: string | null
        postal: string | null
        latitude: number
        longitude: number
        IPv4: string
        state: string | null
      }
    } = await axios.get("https://geolocation-db.com/json/")
    return data
  } catch (error) {
    console.error(error)
  }
}
