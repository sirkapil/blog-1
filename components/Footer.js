import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from '@/components/NowPlaying'
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
        </div>
        <div className="background-author-animate mb-2 flex space-x-2 bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 bg-clip-text text-base font-semibold text-transparent">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-3 flex">
          <NowPlaying />
        </div>
      </div>
    </footer>
  )
}