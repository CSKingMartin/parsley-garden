import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.directive("reveal", {
    beforeMount(el, binding) {
      // el.style.opacity = 0;
      el.classList.add("reveal-init");
      let deep, delay, offset, duration;

      if (binding.value) {
        deep = binding.value.deep;
        delay = binding.value.delay;
        offset = binding.value.offset;
        duration = binding.value.duration;
      } else {
        deep = false;
        delay = "0ms";
        offset = "1rem";
      }

      // switch targeting process for deep vs regular
      if (!deep) {
        console.log("shallow");
        // el.classList.add("opacity-0");
        el.classList.add("transition-opacity");
        el.classList.add("duration-1000");
        el.classList.add("motion-reduce:transition-none");
        el.classList.add("motion-reduce:opacity-1");
        el.classList.add("motion-reduce:translate-y-0");

        // styles based on options
        el.style.transitionDelay = `${delay}ms`;
        // el.classList.add(`tranlate-y-[${offset}em]`);
      } else {
        console.log("deep");
        el.classList.add("reveal-children-init");
      }

      // el.classList.add("opacity-0");
      //   el.style.setProperty(
      //     "--reveal-offset",
      //     binding.value?.offset ?? "1.25rem"
      //   );
      //
      //   el.querySelectorAll("[data-reveal]").forEach((node, index) => {
      //     if (node instanceof HTMLElement) {
      //       nextTick(() => {
      //         if (binding.value?.horizontal === true) {
      //           node.style.transform = `translateX(${offset})`;
      //         } else {
      //           node.style.transform = `translateY(${offset})`;
      //         }
      //
      //         // node.style.transition = "opacity 1.5s ease, transform 1.5s ease";
      //
      //         // node.style.transitionDelay = `${(delay ?? 275) * index}ms`;
      //
      //         if (duration) {
      //           node.style.transitionDuration = `${duration}ms`;
      //         }
      //       });
      //     }
      //   });
      // } else {
      // }
    },
    mounted(el, binding) {
      let threshold = 0.1;
      let deep = false;
      let duration;
      let offset = "1rem";
      let delay = 100; // in milliseconds

      console.log(binding.value);

      if (binding.value) {
        let { threshold: customThreshold } = binding.value;
        if (customThreshold) {
          threshold = customThreshold;
        }
        deep = binding.value.deep;
        duration = binding.value.duration || 1000;
      }
      let options = {
        rootMargin: "0px",
        threshold,
      };
      // check type

      if (deep) {
        el.querySelectorAll("[data-reveal]").forEach((node, index) => {
          if (node instanceof HTMLElement) {
            if (binding.value?.horizontal === true) {
              // node.style.transform = `translateX(${offset})`;
            } else {
              // node.style.transform = `translateY(${offset})`;
            }
            node.style.opacity = "0";
            setTimeout(() => {
              node.style.transition = "opacity 1.5s ease, transform 1.5s ease";
              node.style.transitionDelay = `${(delay ?? 100) * index}ms`;
              node.style.transitionDuration = `${duration}ms`;
            }, 200);
            nextTick(() => {});
          }
        });
      }

      //
      // let offsetClass = binding.value?.offset
      //   ? `translate-y-[${binding.value?.offset}em]`
      //   : "translate-y-[1.25em]";

      let observer = new IntersectionObserver((e) => {
        if (e[0] && e[0].isIntersecting) {
          setTimeout(() => {
            el.classList.remove("opacity-0");
            el.classList.remove("reveal-init");
            el.classList.remove("reveal-children-init");

            // if (!deep) {
            setTimeout(() => {
              el.classList.remove("duration-1000");

              if (deep) {
                el.querySelectorAll("[data-reveal]").forEach((node, index) => {
                  if (node instanceof HTMLElement) {
                    // node.style.transitionDuration = "";
                    node.style.opacity = 1;
                  }
                });
              }
            }, 100);
            // }

            // setTimeout(() => {
            //   if (!deep) {
            //     el.classList.remove("duration-1000");
            //   } else {
            //     el.querySelectorAll("[data-reveal]").forEach((node, index) => {
            //       if (node instanceof HTMLElement) {
            //         if (binding.value?.horizontal === true) {
            //           // node.style.transform = "";
            //         } else {
            //           // node.style.transform = "";
            //         }
            //
            //         // node.style.transition = "";
            //
            //         // node.style.transitionDelay = "";
            //         // node.style.transitionDuration = "";
            //       }
            //     });
            //   }
            // }, timer);
          }, 100);

          observer.disconnect();
        }
      }, options);

      observer.observe(el);
    },
  });
});

/*
	@example
	```html
	 <div v-reveal-children="{ delay: 250, offset: '1rem', duration: 750 }">
		<div data-reveal>...</div>
		<div>
			<div data-reveal>...</div>
		</div>
		<div data-reveal>...</div>
	</div>
	```
*/
// export default defineNuxtPlugin((nuxtApp) => {
// nuxtApp.vueApp.directive("reveal-children", {
//   getSSRProps(binding) {
//     let offset;
//
//     if (binding.value && binding.value.offset) {
//       offset = binding.value.offset;
//     } else {
//       offset = "1.25rem";
//     }
//
//     let ssrProps = {
//       class: "reveal-children-init",
//       style: {
//         "--reveal-offset": offset,
//       },
//     };
//
//     return ssrProps;
//   },
//   created(el: HTMLElement, binding) {
//     el.classList.add("reveal-children-init");
//     el.style.setProperty(
//       "--reveal-offset",
//       binding.value?.offset ?? "1.25rem"
//     );
//     el.querySelectorAll("[data-reveal]").forEach((node, index) => {
//       if (node instanceof HTMLElement) {
//         node.style.opacity = "0";
//
//         if (binding.value?.horizontal === true) {
//           node.style.transform = "translateX(var(--reveal-offset))";
//         } else {
//           node.style.transform = "translateY(var(--reveal-offset))";
//         }
//
//         node.style.transition = "opacity 1.5s ease, transform 1.5s ease";
//         if (binding.value) {
//           let { delay, duration } = binding.value;
//           node.style.transitionDelay = `${(delay ?? 125) * index}ms`;
//
//           if (duration) {
//             node.style.transitionDuration = `${duration}ms`;
//           }
//         }
//       }
//     });
//
//     nextTick(() => {
//       el.classList.remove("reveal-children-init");
//     });
//   },
//   mounted(el: HTMLElement, binding) {
//     let threshold = 0.2;
//     if (binding.value) {
//       let { threshold: customThreshold } = binding.value;
//       if (customThreshold) {
//         threshold = customThreshold;
//       }
//     }
//     let options = {
//       rootMargin: "0px",
//       threshold,
//     };
//
//     let observer = new IntersectionObserver((e) => {
//       if (e[0] && e[0].isIntersecting) {
//         el.querySelectorAll("[data-reveal]").forEach((node, index) => {
//           if (node instanceof HTMLElement) {
//             node.style.removeProperty("opacity");
//             node.style.removeProperty("transform");
//
//             setTimeout(() => {
//               node.style.removeProperty("transition");
//               node.style.removeProperty("transitionDelay");
//             }, (binding?.value?.duration ?? 1500) + (binding.value?.delay ?? 125) * index);
//           }
//         });
//
//         nextTick(() => {
//           el.classList.remove("reveal-children-init");
//           el.style.removeProperty("--reveal-offset");
//         });
//
//         observer.disconnect();
//       }
//     }, options);
//
//     observer.observe(el);
//   },
// });
// });
