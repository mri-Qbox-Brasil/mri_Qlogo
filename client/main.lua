local display = true -- Controla se a logo deve ser exibida

CreateThread(
    function()
        while true do
            Wait(500)
            SendNUIMessage(
                {
                    action = "toggleLogo",
                    show = not IsPauseMenuActive(),
                    config = {
                        size = Config.LogoSize,
                        position = Config.LogoPosition,
                        url = Config.LogoURL,
                        opacity = Config.LogoOpacity
                    }
                }
            )
        end
    end
)
