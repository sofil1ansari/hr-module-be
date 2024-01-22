package com.coderower.hrmodule.api.auth;

import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import com.coderower.hrmodule.services.auth.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService service;

    @GetMapping("/me")
    public ResponseEntity<String> me() {
        return ResponseEntity.ok("{\"_id\":\"63493670f46209d4ee1f6631\",\"emailVerified\":true,\"email\":\"ishaan.puniani@gmail.com\",\"firstName\":\"Ishaan\",\"fullName\":\"Ishaan Puniani\",\"avatars\":[],\"tenants\":[{\"roles\":[\"admin\"],\"_id\":\"634936802a89a46b88bd5f9a\",\"tenant\":{\"_id\":\"6349367e2a89a447fdbd5f97\",\"plan\":\"free\",\"planStatus\":\"active\",\"name\":\"demo\",\"url\":\"92b46d13-26fd-4766-8995-f23fc45beaea\",\"createdBy\":\"63493670f46209d4ee1f6631\",\"updatedBy\":\"63493670f46209d4ee1f6631\",\"createdAt\":\"2022-10-14T10:14:22.626Z\",\"updatedAt\":\"2023-05-06T05:53:51.317Z\",\"__v\":0,\"planStripeCustomerId\":\"cus_NB1IQbt2VGETln\",\"planUserId\":\"63493670f46209d4ee1f6631\",\"credits\":0,\"id\":\"6349367e2a89a447fdbd5f97\",\"settings\":{\"_id\":\"634936802a89a42d66bd5f99\",\"theme\":\"default\",\"tenant\":\"6349367e2a89a447fdbd5f97\",\"createdBy\":\"63493670f46209d4ee1f6631\",\"backgroundImages\":[],\"logos\":[{\"_id\":\"64588fa4d227947ee60dfa70\",\"name\":\"FabBuilder_logo.svg\",\"sizeInBytes\":1564234,\"publicUrl\":\"https://storage.googleapis.com/fab-builder.appspot.com/tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\",\"privateUrl\":\"tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\",\"updatedAt\":\"2023-05-08T05:59:00.680Z\",\"createdAt\":\"2023-05-08T05:59:00.680Z\",\"id\":\"64588fa4d227947ee60dfa70\",\"downloadUrl\":\"https://storage.googleapis.com/fab-builder.appspot.com/tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\"}],\"createdAt\":\"2022-10-14T10:14:24.547Z\",\"updatedAt\":\"2023-05-08T05:59:00.680Z\",\"__v\":0,\"id\":\"634936802a89a42d66bd5f99\"}},\"status\":\"active\",\"updatedAt\":\"2022-10-14T10:14:24.991Z\",\"createdAt\":\"2022-10-14T10:14:24.991Z\",\"id\":\"634936802a89a46b88bd5f9a\"},{\"roles\":[\"admin\"],\"_id\":\"646226245a7f864fa714e050\",\"tenant\":{\"_id\":\"6349367e2a89a447fdbd5f97\",\"plan\":\"free\",\"planStatus\":\"active\",\"name\":\"demo\",\"url\":\"92b46d13-26fd-4766-8995-f23fc45beaea\",\"createdBy\":\"63493670f46209d4ee1f6631\",\"updatedBy\":\"63493670f46209d4ee1f6631\",\"createdAt\":\"2022-10-14T10:14:22.626Z\",\"updatedAt\":\"2023-05-06T05:53:51.317Z\",\"__v\":0,\"planStripeCustomerId\":\"cus_NB1IQbt2VGETln\",\"planUserId\":\"63493670f46209d4ee1f6631\",\"credits\":0,\"id\":\"6349367e2a89a447fdbd5f97\",\"settings\":{\"_id\":\"634936802a89a42d66bd5f99\",\"theme\":\"default\",\"tenant\":\"6349367e2a89a447fdbd5f97\",\"createdBy\":\"63493670f46209d4ee1f6631\",\"backgroundImages\":[],\"logos\":[{\"_id\":\"64588fa4d227947ee60dfa70\",\"name\":\"FabBuilder_logo.svg\",\"sizeInBytes\":1564234,\"publicUrl\":\"https://storage.googleapis.com/fab-builder.appspot.com/tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\",\"privateUrl\":\"tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\",\"updatedAt\":\"2023-05-08T05:59:00.680Z\",\"createdAt\":\"2023-05-08T05:59:00.680Z\",\"id\":\"64588fa4d227947ee60dfa70\",\"downloadUrl\":\"https://storage.googleapis.com/fab-builder.appspot.com/tenant/6349367e2a89a447fdbd5f97/settings/logos/63b45dcd-49ca-4f23-90ed-4353e5df992f.svg\"}],\"createdAt\":\"2022-10-14T10:14:24.547Z\",\"updatedAt\":\"2023-05-08T05:59:00.680Z\",\"__v\":0,\"id\":\"634936802a89a42d66bd5f99\"}},\"invitationToken\":null,\"status\":\"active\",\"updatedAt\":\"2023-05-15T12:31:32.263Z\",\"createdAt\":\"2023-05-15T12:31:32.263Z\",\"id\":\"646226245a7f864fa714e050\"}],\"createdAt\":\"2022-10-14T10:14:08.882Z\",\"updatedAt\":\"2023-05-27T07:54:59.329Z\",\"__v\":0,\"emailVerificationTokenExpiresAt\":\"2023-05-07T11:12:52.172Z\",\"updatedBy\":\"63493670f46209d4ee1f6631\",\"sstripeCustomerId\":\"cus_NrUAYLih8gs0DK\",\"stripeCustomerId\":\"cus_NuIBqUJXK3iEWs\",\"id\":\"63493670f46209d4ee1f6631\"}");
    }

    @PostMapping("/sign-in")
    public ResponseEntity<String> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.signIn(request));
    }
}
