import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/Components/ui/toast"

export function Toaster({
  closeButton,
}: {
  closeButton?: boolean;
}) {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection='up' >
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}

            {closeButton ? <ToastClose className="static" /> : ''}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
