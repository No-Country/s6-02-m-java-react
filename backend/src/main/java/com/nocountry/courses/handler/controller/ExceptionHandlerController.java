package com.nocountry.courses.handler.controller;

import com.nocountry.courses.handler.exception.ResourceAlreadyExistsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.HttpClientErrorException.Forbidden;
import org.springframework.web.client.HttpClientErrorException.Unauthorized;

import com.nocountry.courses.handler.ErrorDetail;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

import static org.springframework.http.HttpStatus.*;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;

@ControllerAdvice
public class ExceptionHandlerController {

    @ResponseStatus(NOT_FOUND)
    @ExceptionHandler({ NotFoundException.class,
            ResourceNotFoundException.class
    })
    public ResponseEntity<?> notFoundHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(NOT_FOUND, request.getRequestURI(), new ErrorDetail(exception));
    }

    @ResponseStatus(FORBIDDEN)
    @ExceptionHandler({ Forbidden.class })
    public ResponseEntity<?> forbiddenHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(FORBIDDEN, request.getRequestURI(), new ErrorDetail(exception));
    }

    @ResponseStatus(UNAUTHORIZED)
    @ExceptionHandler({ Unauthorized.class })
    public ResponseEntity<?> unauthorizedHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(FORBIDDEN, request.getRequestURI(), new ErrorDetail(exception));
    }

    @ResponseStatus(CONFLICT)
    @ExceptionHandler({ResourceAlreadyExistsException.class})
    public ResponseEntity<?> alreadyExistsHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(CONFLICT, request.getRequestURI(), new ErrorDetail(exception));
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({ ArithmeticException.class,
            MissingRequestHeaderException.class,
            MethodArgumentNotValidException.class,
            NullPointerException.class,
            IllegalArgumentException.class,
            IndexOutOfBoundsException.class,
    })
    public ResponseEntity<?> badRequestHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(BAD_REQUEST, request.getRequestURI(), new ErrorDetail(exception));
    }

    @ResponseStatus(INTERNAL_SERVER_ERROR)
    public ResponseEntity<?> internalServerErrorHandler(HttpServletRequest request, Exception exception) {
        return responseBuilder(INTERNAL_SERVER_ERROR, request.getRequestURI(), new ErrorDetail(exception));
    }
}
