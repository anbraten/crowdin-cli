package com.crowdin.cli.utils.http;

import javax.net.ssl.SSLServerSocketFactory;
import java.io.IOException;
import java.net.ServerSocket;

public interface ServerSocketFactory {

    ServerSocket get(int port);

    static ServerSocketFactory standard() {
        return port -> {
            try {
                return new ServerSocket(port);
            } catch (IOException e) {
                throw new RuntimeException("Unexpected error while creating local server");
            }
        };
    }
}
