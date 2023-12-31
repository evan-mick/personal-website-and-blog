'use client'
import { useEffect, useState } from 'react'

// Thx: https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js

function preloadImage (src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      resolve(img)
    }
    img.onerror = img.onabort = function() {
      reject(src)
    }
    img.src = src
  })
}

export default function useImagePreloader(imgList: string[] | undefined): boolean {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false)

  var imageList: string[] = imgList as string[];

  if (imgList === undefined)
    return imagesPreloaded;

  useEffect(() => {
    let isCancelled = false

    async function effect() {
      console.log('PRELOAD')

      if (isCancelled) {
        return
      }

      const imagesPromiseList: Promise<any>[] = []
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i))
      }
  
      await Promise.all(imagesPromiseList)

      if (isCancelled) {
        return
      }

      setImagesPreloaded(true)
    }

    effect()

    return () => {
      isCancelled = true
    }
  }, [imageList])

  // const rtn: boolean = imagesPreloaded;
  return imagesPreloaded;
}
