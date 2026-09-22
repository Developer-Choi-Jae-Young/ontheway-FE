// 온보딩 일러스트 (피그마). 비트맵은 표시 크기의 2배로 저장되어 있습니다.
import img01 from '../assets/onboarding/01.png'
import img02 from '../assets/onboarding/02.png'
import img03 from '../assets/onboarding/03.png'

const IMAGES = {
    1: { src: img01, width: 242, height: 242 },
    2: { src: img02, width: 245, height: 283 },
    3: { src: img03, width: 255, height: 255 },
}

interface CustomOnboardingImageProps {
    step: 1 | 2 | 3;
    className?: string;
}

function CustomOnboardingImage({ step, className }: CustomOnboardingImageProps) {
    const { src, width, height } = IMAGES[step]
    return <img className={className} src={src} width={width} height={height} alt="" />
}

export default CustomOnboardingImage
