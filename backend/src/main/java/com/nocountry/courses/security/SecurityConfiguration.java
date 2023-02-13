package com.nocountry.courses.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    private JwtAuthEntryPoint jwtAuthEntryPoint;
    private CustomUserDetailsService userDetailsService;

    @Autowired
    public SecurityConfiguration(JwtAuthEntryPoint jwtAuthEntryPoint, CustomUserDetailsService userDetailsService) {
        this.jwtAuthEntryPoint = jwtAuthEntryPoint;
        this.userDetailsService = userDetailsService;
    }

    @Autowired


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
/*
        http.headers().frameOptions().disable();
        http
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthEntryPoint)
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/user/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic();
        return http.build();
*/

        http.headers().frameOptions().disable();
        http.exceptionHandling()
                .authenticationEntryPoint(jwtAuthEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/**")
                .permitAll()
                .anyRequest()
                .authenticated().and()
                .csrf()
                .disable();
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();

/*
        return http.csrf(csrf -> csrf.disable())
                .authorizeRequests(auth -> {
                    auth.requestMatchers("/", "static/**").permitAll();
                    auth.requestMatchers("/admin").hasRole("ADMIN");
                    auth.requestMatchers("/vistaAdmin.html").hasRole("ADMIN");
                    auth.requestMatchers("/odontologos").hasRole("ADMIN");
                    auth.requestMatchers("/pacientes").hasRole("ADMIN");
                    //.antMatchers(HttpMethod.GET, "/**").hasAnyRole(UsuarioRole.USER.name(), UsuarioRole.ADMIN.name())
                    auth.requestMatchers("/user").hasRole("USER");
                    auth.requestMatchers("/vistaUsuario.html").hasRole("USER");
                    auth.requestMatchers("/turnos").hasRole("USER")
                            //.antMatchers("/turnos").permitAll()
                            .anyRequest()
                            .authenticated().and()
                            .formLogin().permitAll()
                            .and().logout().permitAll();
                });
*/

    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(){
        return new JwtAuthenticationFilter();
    }

}