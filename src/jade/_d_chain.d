import std.stdio;
import std.conv;

void main(string[] args) {
    auto limit = to!(int)(args[1]);

    for (uint i; i < limit; i++) {
    writeln("  _   _");
    writeln(" (_) (_)");
    writeln("/______ \\");
    writeln("\\\\(O(O \\/");
    writeln(" | | | |");
    writeln(" | |_| |");
    writeln("/______/");
    writeln("  <   >");
    writeln(" (_) (_)");
    }
}
