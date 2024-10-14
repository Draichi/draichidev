/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og'

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') || 'Lucas Draichi'
  const desc = searchParams.get('desc') || 'Software Engineer based in Brazil.'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#1F2937',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: 'auto',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#9CA3AF',
              maxWidth: '700px',
            }}
          >
            {desc}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '40px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: '#9CA3AF',
                marginRight: '20px',
              }}
            >
              draichiboard.com
            </span>
            <span
              style={{
                fontSize: '24px',
                color: '#9CA3AF',
              }}
            >
              Github: @Draichi
            </span>
          </div>
        </div>
        <div
          style={{
            width: '200px',
            height: '200px',
            display: 'flex',
            borderRadius: '100px',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'https://github.com/Draichi.png'}
            alt="Avatar"
            height={256}
            width={256}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
