import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { testimonials } from '@/constants'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]
            slidesInSnap.forEach((slideIndex) => {

                if (isScrollEvent && !slidesInView.includes(slideIndex)) return
                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }
                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
    }, [emblaApi, tweenOpacity])

    return (
        <div className="embla mt-[50px] lg:mt-[100px]">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {testimonials.map((t, index) => (
                        <div className="embla__slide cursor-pointer max-w-[1087px]" key={index}>
                            <div className="bg-s7 px-[10px] lg:px-[48px] py-[30px] lg:py-[55px] flex max-lg:flex-col gap-[29px] justify-center items-center">
                                <div className="rounded-full overflow-hidden shrink-0 w-[135px] lg:w-[235px] h-[135px] lg:h-[235px]">
                                    <img className="w-full h-full object-center object-cover" src={t.img} alt="" />
                                </div>
                                <div className="tracking-[0.02em] max-lg:text-center">
                                    <p className="text-s3 text-[16px] lg:text-[21px] font-[400] leading-[24px] lg:leading-[31.5px]">{t.review}</p>
                                    <p className="font-[500] leading-[31.5px] lg:leading-[36px] text-[21px] lg:text-[24px] mt-[8px] lg:mt-[15px]">{t.name}</p>
                                    <p className="font-[400] text-[17px] lg:text-[19px] leading-[25px] lg:leading-[28.5px]">{t.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__dots mt-[40px] lg:mt-[87px]">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmblaCarousel
