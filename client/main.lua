local display = true -- Controla se a logo deve ser exibida

CreateThread(
    function()
        while true do
            Wait(500)
            if IsPauseMenuActive() then
                display = false
            else
                display = true
            end
            SendNUIMessage(
                {
                    action = "toggleLogo",
                    show = display
                }
            )
        end
    end
)

RegisterNetEvent(
    "onClientResourceStart",
    function(resource)
        if resource ~= GetCurrentResourceName() then
            return
        end

        SendNUIMessage(
            {
                action = "config",
                config = {
                    size = Config.LogoSize,
                    position = Config.LogoPosition,
                    url = Config.LogoURL,
                    opacity = Config.LogoOpacity,
                }
            }
        )
    end
)
